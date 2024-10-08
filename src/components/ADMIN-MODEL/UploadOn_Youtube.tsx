import { firestore } from "@/Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type InputState = {
  imbeededURL: string;
};

function UploadOn_Youtube() {
  const [input, setInput] = useState<InputState>({
    imbeededURL: "",
  }); //State

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })); //Passing Value to State
  };

  const HandleFormButton = async () => {
    // e.preventDefault();
    console.log(input);
    try {
      // NewUser
      const youtube_video = {
        id: uuidv4(),
        youtubeSRC: input.imbeededURL,
      };

      // Also Storing user Data on firebase so we have user Logs
      await setDoc(
        doc(firestore, "youtube_testimonials", youtube_video.id),
        youtube_video
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleChangeInput} name="imbeededURL" />
        <button onClick={HandleFormButton}>add</button>
      </div>
    </>
  );
}

export default UploadOn_Youtube;
