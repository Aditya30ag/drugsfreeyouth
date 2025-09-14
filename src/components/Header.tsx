"use client";
import React from 'react';
import { Home, Info, User, Megaphone, Phone } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

const Header = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About Us', url: '/about', icon: Info },
        { name: 'Founder', url: '/founder', icon: User },
        { name: 'Campaign', url: '/campaign', icon: Megaphone },
        { name: 'Contact', url: '/contact', icon: Phone },
    ];

    // NavBar is fixed (bottom on mobile, top on >=sm)
    return <NavBar items={navItems} />;
};

export default Header;
