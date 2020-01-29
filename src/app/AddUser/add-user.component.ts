import {Component} from '@angular/core';

@Component({
  selector:'add-user',
  templateUrl:'./add-user.component.html',
  styleUrls:['./add-user.component.css']
})
export class AddUser{
  AddUserField:Object[]=[{
    label:"Full Name",
    Placeholder:"Full Name",
    InputType:"text",
    name:"Full Name",
    required:"true",
    pattern:"[A-Za-z]{3}",
    error:[
      {
        condition:"",
        errormessage: "Name is Required"
      },
      {
        condition:"",
        errormessage:  "Name Should match the length" 
      }
    ]
  },
  {
    label:"User Name",
    Placeholder:"User Name",
    InputType:"text",
    name:"User Name",
    required:"true",
    pattern:"[A-Za-z]{3}",
    error:[
      {
        condition:"",
        errormessage: "User Name is Required"
      },
      {
        condition:"",
        errormessage:  "User Name Should match the length" 
      }
    ]
  },
  {
    label:"Password",
    Placeholder:"Password",
    InputType:"password",
    name:"Password",
    required:"true",
    pattern:"^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$",
    error:[
      {
        condition:"",
        errormessage: "Password is required"
      },
      {
        condition:"",
        errormessage: "Password must have Atleast one number and special character"
      }
    ]
  },
  {
    label:"Re-Enter Password",
    Placeholder:"Re-Enter Password",
    InputType:"password",
    name:"Re-Enter Password",
    required:"true",
    error:[
      {
        condition:"",
        errormessage: "Password is required"
      },
      {
        condition:"",
        errormessage: "password doesnot match"
      }
    ]
  },
  {
    label:"Email",
    Placeholder:"Email",
    InputType:"email",
    name:"Email",
    required:"true",
    pattern:"",
    error:[
      {
        condition:"",
        errormessage: "Email is required"
      },
      {
        condition:"",
        errormessage:"Invalid Email"
      }
    ]
  },
  {
    label:"Mobile",
    Placeholder:"Mobile",
    InputType:"text",
    name:"Mobile",
    required:"true",
    pattern:"[0-9]{9}",
    error:[
      {
        condition:"",
        errormessage:"Mobile Number is required"
      },
      {
        condition:"",
        errormessage:"Invalid Mobile Number"
      }
    ]
  }
  ];
}