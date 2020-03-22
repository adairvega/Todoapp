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
#active-task {
  font-size: 20;
  font-weight: bold;
  color: #53ba82;
  margin-left: 20;
  padding-top: 5;
  padding-bottom: 10;
}

#completed-task {
  font-size: 20;
  color: #d3d3d3;
  margin-left: 20;
  padding-top: 5;
  padding-bottom: 10;
  text-decoration: line-through;
}

.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}

TextField {
  font-size: 20;
  color: #53ba82;
  margin-top: 10;
  margin-bottom: 10;
  margin-right: 5;
  margin-left: 20;
}

Button { 
  font-size: 15; 
  font-weight: bold; 
  color: white; 
  background-color: #53ba82; 
  height: 40;
  margin-top: 10; 
  margin-bottom: 10; 
  margin-right: 10; 
  margin-left: 10; 
  border-radius: 20px; 
}
</style>