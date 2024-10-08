import { auth, firestore, storage } from "@/Firebase/firebase";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";

type MakeCoursesProps = {};

type InputState = {
  courseTitle: string;
  shortDescription: string;
  deepDescription: string;
  image: File | null; // Update the type to accept File or null
  text: string;
  outCome: string
};

const MakeCourses: React.FC<MakeCoursesProps> = () => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState<InputState>({
    courseTitle: "",
    shortDescription: "",
    deepDescription: "",
    image: null,
    text: "",
    outCome: "",
  }); //State
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); //Passing Value to State
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setInput((prev) => ({ ...prev, image: image }));
    }
  };

  const HandleFormButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    try {
      let downloadURL = "";
      if (input.image) {
        const storageRef = ref(storage, `courses/${input.image.name}`);
        await uploadBytes(storageRef, input.image);
        downloadURL = await getDownloadURL(storageRef);
      }

      // NewUser
      const newCourse = {
        id: uuidv4(),
        coursetitle: input.courseTitle,
        shortDescription: input.shortDescription,
        deepDescription: input.deepDescription,
        outCome: input.outCome,
        image: downloadURL,
        coursePoints: [],
      };

      // Also Storing user Data on firebase so we have user Logs
      await setDoc(doc(firestore, "courses", newCourse.id), newCourse);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="">
        <form onSubmit={HandleFormButton}>
          <input
            type="text"
            name="courseTitle"
            onChange={handleChangeInput}
            placeholder="Course Title"
          />
          <input
            type="text"
            name="shortDescription"
            onChange={handleChangeInput}
            placeholder="Short Description"
          />
          <input
            type="text"
            name="deepDescription"
            onChange={handleChangeInput}
            placeholder="Deep Description"
          />
          <input
            type="text"
            name="outCome"
            onChange={handleChangeInput}
            placeholder="OutCome"
          />
          <input type="file" name="image" onChange={handleFileChange} />
          <button>Upload</button>
        </form>
      </div>
    </div>
  );
};
export default MakeCourses;
