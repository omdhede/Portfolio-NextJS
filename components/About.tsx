import React from "react";
import { motion } from "framer-motion";


type Props = {}

export default function About({}: Props) {
    return (
        <div
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                initial={{
                    x:-200,
                }}
                whileInView={{
                    x:0,
                }}
                viewport={{ once: true }}
                src="https://images.pexels.com/photos/17572202/pexels-photo-17572202/free-photo-of-a-black-and-white-photo-of-a-man-smiling.jpeg?auto=compress&cs=tinysrgb&w=600"

            />
        </div>
    )
}