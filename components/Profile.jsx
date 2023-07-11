import PromptCard from "./PromptCard";
import Typography from '@mui/material/Typography';
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
  <Typography variant="h1" sx={{ textAlign: 'left' }}>
      <span
        className="blue_gradient"
        sx={{
          background: 'linear-gradient(to right, #0000FF, #00FFFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {name} Profile
      </span>
    </Typography>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;