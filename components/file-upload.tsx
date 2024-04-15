"use client"; 

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
import { error } from "console";

interface FileUploadProps {
    onChange: (url?: String) => void;
    value: String;
    endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
    onChange, 
    value,
    endpoint
}: FileUploadProps 

) => {

    const fileType = value?.split(".").pop();

    if (value && fileType !== "pdf" ) {
        return(
            <div className="relative w-20 h-20">
                <Image
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"

            />
            <button
            onClick={() => 
                onChange("")}
                className= "text-white bg-rose-500 rounded-full p-1 absolute top-0 right-0 shadow-sm"
                type="button"
            >
                <X className="h-4 w-4"/>
            </button>
            </div>
        )
    }

    return (
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
}}
 onUploadError={(error: Error)=>{
    console.log(error);
 }}

/>
    )}