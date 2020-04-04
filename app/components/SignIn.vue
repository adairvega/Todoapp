<template>
    <Page class="page">
        <ActionBar title="Todo app" class="action-bar" />

        <FlexboxLayout class="page" width="100%" height="100%">
            <StackLayout class="form">
                <Image class="logo" src="~/assets/logo.png"></Image>
                <Label class="header" text="Se connecter"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                </GridLayout>

                <Button :text="'Connexion'" @tap="submit" class="btn btn-primary m-t-20"></Button>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="goToSignUp">
                <FormattedString>
                    <Span :text="'Créer un compte'"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
import axios from 'axios';
import Home from './Home.vue';
import SignUpVue from './SignUp.vue';

export default {
    
	data() {
		return {
			user: {username: "", password: ""}
		}
	},
	components : {
        Home
	},
	methods: {
    signIn() {
			axios
			.post("https://api.todolist.sherpa.one/users/signin", this.user)
			.then((response) => {
				console.log(response.data)
				this.$navigateTo(Home);
			}).catch((response) => {
				console.log(response)
			})
        },
        goToSignUp(){
                this.$navigateTo(SignUpVue);
        }
    }
}
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #35495e;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }

    ActionBar {
      background-color: #35495e;
      color: white; 
    }
    
    Button {
      background-color: #35495e;
      color: white;         
    }
</style>