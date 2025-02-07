"use client"
import React from "react"; 
import {NextUIProvider} from "@nextui-org/react";
import FAQComponent from "../Components/FAQComponent/FAQComponent";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <FAQComponent />
                <Footer />
            </NextUIProvider>
        </>
    );
};