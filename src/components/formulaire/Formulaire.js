// ** React Imports
import { useState } from 'react'


import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'

import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import validator from 'validator'



const ImgStyled = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    }
}))


const Formulaire = () => {
    // ** State
    const [openAlert, setOpenAlert] = useState(true)
    const [imgSrc, setImgSrc] = useState('https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png')
    const [values, setValues] = useState({
        newPassword: '',
        showNewPassword: false,
        confirmNewPassword: '',
        showConfirmNewPassword: false
    })

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }




    return (

        <CardContent>
           <h1 style={{color:"#2E86C1" , fontWeight:"bold" , fontFamily:"Verdana"}}>Presque fini !</h1>
            <h5 style={{color:"#AAB7B8" , fontFamily:"Verdana"}}>Une fois que des Teach'rs auront répondu a votre annonce, vous
                aurez besoin d'un compte pour y répondre. Prenons de l'avance !</h5>
            <br/>
            <br/>
            <form>
                <Grid container spacing={7}>
                    <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ImgStyled src={imgSrc} alt='Profile Pic' />
                            <Box>
                                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                    Upload New Photo
                                    <input
                                        hidden
                                        type='file'
                                        onChange={onChange}
                                        accept='image/png, image/jpeg'
                                        id='account-settings-upload-image'
                                    />
                                </ButtonStyled>
                                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png')}>
                                    Reset
                                </ResetButtonStyled>
                                <Typography variant='body2' sx={{ marginTop: 5 }}>
                                    Allowed PNG or JPEG. Max size of 800K.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label='Nom' placeholder='Mokhtar' />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label='Prénom' placeholder='Mohamed' />
                    </Grid>

           <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='example@example.com'
                onChange={(e) => validateEmail(e)} />


        <span style={{
            fontWeight: 'bold',
            color: 'red',
        }}>{emailError}</span>
       </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type='number' label='Téléphone portable' placeholder='+33 6 XX XX XX XX ' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type='password' label='Mot de passe' placeholder='••••••••••••'  />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth type='password' label='Confirmer votre mot de passe' placeholder='••••••••••••' />
                    </Grid>


                    <Grid item xs={12}>
                        <Button variant='contained' sx={{ marginRight: 3.5 }}>
                            Save Changes
                        </Button>
                        <Button type='reset' variant='outlined' color='secondary'>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    )
}

export default Formulaire;
