"use client";
import React from 'react';
import { Home, Info, User, Megaphone, Phone, HelpCircle } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

const Header = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About Us', url: '/about', icon: Info },
        { name: 'Founder', url: '/founder', icon: User },
        { name: 'Campaign', url: '/campaign', icon: Megaphone },
        { name: 'Resources', url: '/resources', icon: HelpCircle },
        { name: 'Contact', url: '/contact', icon: Phone },
    ];

    // NavBar is fixed at the top across all breakpoints
    return <NavBar items={navItems} />;
};

export default Header;
