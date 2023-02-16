import { Button } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";

const Settings = () => {
  return (
<form onSubmit=h>
  <SelectField label='Category' />
  <SelectField label='Difficulty' />
  <SelectField label='Type' />
  <Box mt={3} width="100%" >
    <Button fullWidth variant="contained" type="submit">
      Get Started
    </Button>
  </Box>
</form>
  );
};

export default Settings;