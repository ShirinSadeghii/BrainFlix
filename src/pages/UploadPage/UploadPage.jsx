import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import UploadedVideo from "../../components/UploadedVideo/UploadedVideo";


function UploadPage() {
    return (
        <>
        <Header />
        <UploadedVideo />
        </>
    )
}

export default UploadPage