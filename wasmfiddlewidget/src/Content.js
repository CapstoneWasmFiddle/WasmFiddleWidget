import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "./logo.png";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Content() {
    const [submit, setSubmit] = React.useState(false);
    const [output, setOutput] = React.useState("");
    const [language, setLanguage] = React.useState("");
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value: ', value);
    }, []);

    const onSubmit = () => {
        setSubmit(!submit);
    };

    const handleLanguage = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="contentDiv" style={ { height: 800, width: 500, justifyContent: 'center', alignContent: 'center'} }>
            <AppBar position="static" variant="dense" display="flex">
                <Toolbar>
                    <img src={Logo} alt="logo" width="30" height="30" border="2"/>
                    <Typography variant="h5" 
                        component="div" sx={{ flexGrow: 1, ml: 2 }}>
                        WasmFiddle
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stack spacing={1} justifyContent="center" alignItems="center">
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
                    <FormControl variant="standard" sx={{minWidth: 64}}>
                        <Select
                            value={language}
                            onChange={handleLanguage}
                            label="Language"
                        >
                        <MenuItem value={"c"} data-cy="languageDropdownC">C</MenuItem>
                        <MenuItem value={"cpp"} data-cy="languageDropdownCpp">C++</MenuItem>
                        <MenuItem value={"rust"} data-cy="languageDropdownRust">Rust</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button onClick={onSubmit} variant="outlined" color="inherit" sx={{minWidth: 64}}>
                        Run
                    </Button>
                </Grid>
            </Grid>
            <CodeMirror
                height="270px"
                width="400px"
                placeholder={"This editor is for input"}
                onChange={onChange}
            />
            <CodeMirror
                height="130px"
                width="400px"
                placeholder={"This editor is for output."}
                value={output}
                onUpdate={output}
                editable={false}
            />
        </Stack>
    </div>
    );
};