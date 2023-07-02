"use client";

import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <Image 
          src='/assets/images/logo.svg'
          alt="sweet space logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">sweet space</p>
      </Link>

      <div className="sm:flex hidden">
      {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
            <Link href='/meal-setup' className='black_btn'>
              Meal setUp
            </Link>
      
            <div>
              <button className='black_btn'
                aria-controls={open ? '' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                Room
              </button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <Link href='/test'>
                  <MenuItem onClick={handleClose}>Add Room</MenuItem>
                </Link>
                <Link href='/table'>
                  <MenuItem onClick={handleClose}>Room List</MenuItem>
                </Link>
              </Menu>
            </div>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                alt="sweet space logo"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
              {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      <div className='sm:hidden flex relative'>
      {session?.user ? (
          <div className='flex'>
        
              <Image
                src={session?.user.image}
                alt="sweet space logo"
                width={37}
                height={37}
                className='rounded-full'
          
              onClick={() => setToggleDropdown(!toggleDropdown)}
              />
           {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
         
          </div>
        ) : (
          <>
              {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>  
  )
}

export default Nav;