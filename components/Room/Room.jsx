"use client";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CssBaseline from '@mui/material/CssBaseline';

import Paper from '@mui/material/Paper';
const defaultTheme = createTheme();

import { createTheme, ThemeProvider } from '@mui/material/styles';
const Form = ({ post, setPost, type, handleSubmit, submitting }) => {


  return (
    <section>
    
 
      <br>
      </br>
      
        <ThemeProvider theme={defaultTheme}>
     <Grid container component="main" sx={{ height: '100vh' , width:'180vh'}}>
        <CssBaseline />
        
        <Grid
          item
          xs={false}
          sm={2}
          md={7}
          sx={{
            
            backgroundImage: 'url("/assets/images/abc.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[500],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />


        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <Typography variant="h4" color='secondary'  gutterBottom>
      <Box sx={{ textTransform: 'uppercase', m: 1 , fontWeight: 'bold', fontFamily: 'Monospace', letterSpacing: 3}}>
      <BedOutlinedIcon  sx={{ fontSize: 40 }} color='secondary' />  {type} Room
      </Box>
      </Typography>
        


      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="type"
              value={post.type}
              onChange={(e) => setPost({ ...post, type: e.target.value })}
              name="type"
              label="Room Type"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
              id="description"
              name="description"
              label="Description"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="overview"
              value={post.type}
              onChange={(e) => setPost({ ...post, overview: e.target.value })}
              name="overview"
              label="Overview"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={post.size}
              onChange={(e) => setPost({ ...post, size: e.target.value })}
              id="size"
              name="size"
              label="Room Size"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>

   

          <Grid item xs={12} sm={6}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                control={<Radio />}
                value='male'
                checked={post.gender === 'male'}
                onChange={(e) => setPost({ ...post, gender: e.target.value })}
                label="male"
              />
              <FormControlLabel
                control={<Radio />}
                value='female'
                checked={post.gender === 'female'}
                onChange={(e) => setPost({ ...post, gender: e.target.value })}
                label="female" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label=" picker"
                 
                  value={post.date}
                  onChange={(newValue) => setPost({ ...post, date: newValue })}

                />
                </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <NativeSelect
                  value={post.age}
                  onChange={(e) => setPost({ ...post, age: e.target.value })}
                >
                  <option value='ten'>Ten</option>
                  <option value='twenty'>Twenty</option>
                  <option value='thirty'>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>

        </Grid>
        <br></br>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            type='submit'
            disabled={submitting}
            endIcon={<SendIcon />}>
            {submitting ? `${type}ing...` : type}
          </Button>

          <Button
            variant="contained"
            color="primary"
            href='/'>
            Cancel
          </Button>

        </Stack>
      </form>
          
          </Box>
         </Grid>   
         
         
         
             </Grid>
     </ThemeProvider>
    </section>
  );
}

export default Form;






// export default function SignInSide() {

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url("/assets/images/abc.jpg")',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
           
          
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }