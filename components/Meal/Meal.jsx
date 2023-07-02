"use client";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import RoomServiceRoundedIcon from '@mui/icons-material/RoomServiceRounded';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';




const Form = ({ post, setPost, type, handleSubmit, submitting }) => {
 
 
//  const formattedDate = format(new Date(post.date), 'dd MMM yyyy');


  return (
    <section>
      <Typography variant="h6" gutterBottom>
      <RoomServiceRoundedIcon  sx={{ fontSize: 40 }} color='secondary' />  {type} Meal
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
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value })}
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              value={post.message}
              onChange={(e) => setPost({ ...post, message: e.target.value })}
              name="message"
              label="Message"
              fullWidth
              autoComplete="shipping address-line2"
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
                    {/* <Typography >
        Formatted Date: {formattedDate}
      </Typography> */}
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
          <Button color="success"
            variant="contained"
            type='submit'
            disabled={submitting}
            endIcon={<SendIcon />}>
            {submitting ? `${type}ing...` : type}
          </Button>
          <Button href='/'>Cancel</Button>
        </Stack>
      </form>
    </section>
  );
}

export default Form;