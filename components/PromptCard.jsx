"use client";
import "@styles/globals.css"
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/room");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
    


    <Box className="prompt-card">
      
        <Box className="prompt-icon">
       
          <Box className="prompt-click"
            onClick={handleProfileClick}
          >
           
           <Image
              src={post.creator.image}
              alt='user_image'
              width={40}
              height={40}

            />
            <Box className="prompt-name">
              <Typography >
                {post.creator.username}
              </Typography>
              <Typography >
                {post.creator.email}
              </Typography>
            </Box>
          </Box>

          <Tooltip title={copied === post.prompt ? 'Copied' : 'Copy'}>
            <IconButton onClick={handleCopy} >
              <Image
                src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
                alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
                width={12}
                height={12}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography
          variant="body2"
          sx={{
            marginTop: '2rem',
          }}
        >
          {post.prompt}
        </Typography>

        <Typography className="prompt-tag"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </Typography>

        {session?.user.id === post.creator._id && pathName === "/room" && (
          <Box
            mt={5}
            display="flex"
            alignItems="center"
            gap={4}
            borderTop="1px solid rgba(0, 0, 0, 0.12)"
            pt={3}
          >
            <Typography className="prompt-tag"
              onClick={handleEdit}
            >
              Edit
            </Typography>
            <IconButton
              size="small"
              className="orange_gradient"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </Box>
     </>
  );
};

export default PromptCard;