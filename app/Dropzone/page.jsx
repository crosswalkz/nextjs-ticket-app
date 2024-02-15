"use client"
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
// import {  XMarkIcon } from '@heroicons/react/24/solid'
// import { faX } from "@fortawesome/free-solid-svg-icons";
// import { faX } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";



const Dropzone = ({ className }) => {
  // const [files, setFiles] = useState([])
  // const [rejected, setRejected] = useState([])
  const [demo , setDemo] = useState({
    demo_file:[],
    demo_rejected_file:[]
  })
  useEffect(()=>{
    // console.log("files" , files);
    console.log("demo.demo_file:" , demo.demo_file);
    // console.log("rejected files" , rejected);
    console.log("demo.demo_rejected_file" , demo.demo_rejected_file);
  } ,[demo])

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      console.log("inside the acceptedfiles");
      // setFiles(previousFiles => [
      //   ...previousFiles,
      //   ...acceptedFiles.map(file =>
      //     Object.assign(file, { preview: URL.createObjectURL(file) })
      //   )
      // ])
     

      setDemo(previousDemo => ({
        ...previousDemo,
        demo_file: [
          ...previousDemo.demo_file,
          ...acceptedFiles.map(file =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        ]
      }))
      // console.log("demo files:",demo);
      
      
    }

    if (rejectedFiles?.length) {
      // setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
      setDemo(previousDemo => ({
        ...previousDemo,
        demo_rejected_file: [
          ...previousDemo.demo_rejected_file,
          ...rejectedFiles
        ]
      }));
 


    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    maxSize: 1024 * 1000,
    onDrop
  })

  // useEffect(() => {
  //   // Revoke the data uris to avoid memory leaks
  //   return () => demo.demo_file.forEach(file => URL.revokeObjectURL(file.preview))
  // }, [demo.demo_file])

  const removeFile = name => {
    // setFiles(files => files.filter(file => file.name !== name))
    setDemo(previousDemo => ({
      ...previousDemo,
      demo_file: previousDemo.demo_file.filter(file => file.name !== name)
    }));
  }

  const removeAll = () => {
    // setFiles([])
    // setRejected([])
    setDemo(previousDemo => ({
      demo_file: [],
      demo_rejected_file: []
    }));
  }

  const removeRejected = name => {
    // setRejected(files => files.filter(({ file }) => file.name !== name))
    setDemo(previousDemo => ({
      ...previousDemo,
      demo_rejected_file: previousDemo.demo_rejected_file.filter(({file}) => file.name !== name)
    }));
  }


  return (
    <form>
      <div
        {...getRootProps({
          className: className
        })}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center gap-4'>
          {/* <ArrowUpTrayIcon className='w-5 h-5 fill-current' /> */}
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop files here, or click to select files</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className='mt-10'>
        <div className='flex justify-between gap-4'>
          <h2 className='title text-3xl font-semibold'>Preview</h2>
          <button
            type='button'
            onClick={removeAll}
            className='mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors'
          >
            Remove all files
          </button>

        </div>

        {/* Accepted files */}
        <h3 className='title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3'>
          Accepted Files
        </h3>
        <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
          {demo.demo_file.map(file => (
            <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
               {console.log("inside the map loop. Demo.demo_file:",demo.demo_file)}
               {console.log("individual file:",file)}
              
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview)
                }}
                className='h-full w-full object-contain rounded-md'
              />
               <button
                type='button'
                className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
                onClick={() => removeFile(file.name)}
              >
                <FontAwesomeIcon icon={faTrash} className='icon w-4 h-4' style={{color: "#EF5252",}}  />
              </button>
              <p className='mt-2 text-neutral-500 text-[12px] font-medium'>
                {file.name}
              </p>

            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className='title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3'>
          Rejected Files
        </h3>
        <ul className='mt-6 flex flex-col'>
          {demo.demo_rejected_file.map(({ file, errors }) => (
            <li key={file.name} className='flex items-start justify-between'>
              <div>
                <p className='mt-2 text-neutral-500 text-sm font-medium'>
                  {file.name}
                </p>
                <ul className='text-[12px] text-red-400'>
                  {errors.map(error => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type='button'
                className='mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors'
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  )
}

export default Dropzone