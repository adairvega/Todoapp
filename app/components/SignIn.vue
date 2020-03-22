<template>
   <Page class="page">
      <FlexboxLayout class="page" width="100%" height="100%">
			  <StackLayout class="form" width="100%" height="100%">

          <StackLayout class="input-field" marginBottom="25">
            <TextField class="input" hint="Username" keyboardType="text" autocorrect="false" autocapitalizationType="none" v-model="user.username"
              returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
            <StackLayout class="hr-light" />
          </StackLayout>

          <StackLayout class="input-field" marginBottom="25">
            <TextField class="input" hint="Password" keyboardType="password" autocorrect="false" autocapitalizationType="none" v-model="user.pwd"
              returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
            <StackLayout class="hr-light" />
          </StackLayout>

          <Button :text="'Sign Up'" @onTap="signIn" />

			  </StackLayout>
      </FlexboxLayout>
    </Page>
</template>

<script>
import axios from 'axios';
export default {
	components : {
	},
	methods: {
    signIn() {
			//this.$navigateTo(Home);
			axios
			.post("https://api.todolist.sherpa.one/users/signin", this.user)
			.then((response) => {
				console.log(response.data)
				this.$navigateTo(Home);
			}).catch((response) => {
				console.log(response)
			})
		}
	},
	data() {
		return {
			user: {username: "", password: ""}
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
</style>