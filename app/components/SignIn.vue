<template>
    <GridLayout row="0" rows="auto, auto, auto">

        <Label class="eloha-font-semibold login-field-label m-b-2 font-size-md" row="0" text="Email"></Label>

        <TextField row="1" class="eloha-font-semibold login-input-field font-size-md" hint="E.g. user@examples.com" keyboardType=" email" [(ngModel)]="user.email" autocorrect="false" autocapitalizationType="none" (focus)="onEmailFocus()" [ngClass]="{'input-field-error': hasEmailErrors()}"></TextField>

        <Label *ngIf="hasEmailErrors()" class="eloha-font-semibold m-t-2 login-field-label color-danger font-size-md" row="2" [text]="getEmailError()"></Label>

    </GridLayout>
</template>

<script>

export default {
	components : {
	},
	methods: {
	},
	data() {
		return {
			user: {firstname: "", lastname: "", email: "", gender: ""}
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