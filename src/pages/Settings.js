import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import './styles.css';

const Settings = () => {

  const { response, error, loading } = useAxios({url:"/api_category.php"})

  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Typography variant="6" mt={20} color="red">
        Something went wrong
      </Typography>
    )
  }

  const difficultyOptions = [
    { id: "easy", name:"Easy"},
    { id: "medium", name:"Medium"},
    { id: "hard", name:"Hard"}
  ]

  const typeOptions = [
    { id: "multiple", name:"Multiple Choice"},
    { id: "boolean", name:"True or False"}
  ]

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/questions')
  };
  
  return (
<form onSubmit={handleSubmit}>
  <Box mt={5} mb={5}>
    <Typography variant="h3" fontWeight="bold" className="title">Choose the settings for your Trivia Quizz :</Typography>
  </Box>
  <SelectField options={response.trivia_categories} label='Category' />
  <SelectField options={difficultyOptions} label='Difficulty' />
  <SelectField options={typeOptions} label='Type' />
  <TextFieldComp/>
  <Box mt={3} width="100%" >
    <Button fullWidth variant="contained" type="submit">
      Get Started
    </Button>
  </Box>
</form>
  );
};

export default Settings;