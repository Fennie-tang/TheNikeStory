import React from 'react'
import { useEffect, useRef } from "react"

const UploadPic = ({ setUploadedImage }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dsupovurs',
      uploadPreset: 'zhgtsery'
    },
      function (error, result) {
        console.log(result.data.info.files[0].uploadInfo.url);
        setUploadedImage(result.data.info.files[0].uploadInfo.url)
      })
  }, [])
  return (
    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); widgetRef.current.open() }}>
      Upload Image
    </button>
  )

};

export default UploadPic