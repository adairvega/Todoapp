<template>
    <Page class="page">
        <ActionBar title="Todo app" class="action-bar" />

        <FlexboxLayout class="page" width="100%" height="100%">
            <StackLayout class="form" width="70%">
				<Image class="logo" src="~/assets/logo.png"></Image>
            	<Label class="header" text="S'inscrire"></Label>
				
                
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Prenom" v-model="user.firstname"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input"
                            hint="Nom" v-model="user.lastname"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" class="input-field">
                        <TextField class="input"
                            hint="email" keyboardType="email" autocorrect="false" v-model="user.email"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
					
					<StackLayout row="3" class="input-field">
                        <TextField class="input"
                            hint="female / male" v-model="user.gender"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                <Button :text="'Créer compte'" @tap="signUp" class="btn btn-primary m-t-20"></Button>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="goToSignIn">
                <FormattedString>
                    <Span :text="'J\'ai déjà un compte : Se connecter'"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
import axios from 'axios';
import SignInVue from './SignIn.vue';
/*email: 'test10@mail.fr',
JS:   password: 'tACE2y5wiH',
JS:   uuid: 'dd288ca0-5f86-11ea-a204-a7a3efa88c7c'*/

/* TEST CREDENTIALS
email: 'jj@jj.com',
JS:   password: 'VViF3i8US6',
JS:   uuid: 'd76a6cb0-743b-11ea-a100-cd224cefdaf9'

{ email: 'ban@testam.ms',
JS:   password: '+HiA+A/48P',
JS:   uuid: 'a458ce00-7686-11ea-bda4-e3af246dc956' }
*/
export default {
	
	data() {
		return {
			user: {firstname: "", lastname: "", email: "", gender: ""}
		}
	},
	components : {
		
	},
	methods: {
		signUp() {
			axios
			.post("https://api.todolist.sherpa.one/users/signup", this.user)
			.then((response) => {
				console.log(response.data)
				//Alert
				let options = {
					title: "Important !",
					message: response.data.email+" voici votre mot de passe : "+response.data.password+" veuillez bien le retenir.",
					okButtonText: "Accepter"
				};

				alert(options).then(() => {
					console.log("L'utilisateur a été crée !");
				});
				//Redirection
				this.$navigateTo(SignInVue);
			}).catch((response) => {
				console.log(response)
			})
		},

		goToSignIn(){
			this.$navigateTo(SignInVue);
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