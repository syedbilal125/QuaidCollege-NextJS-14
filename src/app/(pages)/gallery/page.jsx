"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import event1 from "../../../../public/event1.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, storage } from "@/Firebase/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default function Callary(props) {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [input, setInput] = useState({
    image: null,
    eventDes: "",
    eventTitle:""
  }); //State

  const handleChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); //Passing Value to State
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setInput((prev) => ({ ...prev, image: image }));
    }
  };

  const HandleFormButton = async (e) => {
    e.preventDefault();
    try {
      let downloadURL = "";
      if (input.image) {
        const storageRef = ref(storage, `Gallery/${input.image.name}`);
        await uploadBytes(storageRef, input.image);
        downloadURL = await getDownloadURL(storageRef);
      }

      // NewUser
      const Gallery = {
        id: uuidv4(),
        image: downloadURL,
        eventDes: input.eventDes,
        eventTitle: input.eventTitle
      };

      // Also Storing user Data on firebase so we have user Logs
      await setDoc(doc(firestore, "gallery", Gallery.id), Gallery);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getimages = async () => {
      // Fetching data logic
      const q = collection(firestore, "gallery");
      const querySnapshot = await getDocs(q);
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });
      setGallery(temp);
    };
    getimages();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const docRef = doc(firestore, "user_data_logs", user?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getUserData();
  }, [setUserData]);


  return (
    <>
      <NavBar />
      <PageHeader title="Photo Gallery" />
      <div className="max-w-6xl mx-auto py-10">
        <h1
          className="text-5xl font-semibold
        text-center py-5"
        >
          Latest Events
        </h1>

        {userData.isAdmin && (
          <div>
            <button onClick={HandleFormButton}>Add</button>
            <input type="file" onChange={handleFileChange} />
            <input
              type="text"
              onChange={handleChangeInput}
              placeholder="event des"
              name="eventDes"
            />
             <input
              type="text"
              onChange={handleChangeInput}
              placeholder="eventTitle"
              name="eventTitle"
            />
          </div>
        )}

        <div className="w-full flex justify-between items-center">
          {gallery.map((item) => (
            <div className="card cursor-pointer" key={item.id}>
              <Image src={item.image} className="w-[300px] h-[200px]" alt="eaw" width={100} height={100} />
              <div className="card__content">
                <p className="card__title">{item.eventTitle}</p>
                <p className="card__description">
                  {item.eventDes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

Callary.getInitialProps = async (ctx) => {
  // Perform your data fetching here

  return { data };
};
