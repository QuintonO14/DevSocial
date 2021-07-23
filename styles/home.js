import styled, { keyframes } from 'styled-components'
import { TagCloud } from 'react-tagcloud'

export const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const BlockedPosts = styled.div`
    background-color: white;
    height: fit-content;
    text-align: center;
    padding: 5%;
`

export const CloseModal = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    border: none;
    font-size: 18px;
`

export const Comment = styled.div`
    border: 1px solid;
    padding: 1%;
    font-size: 16px;
    margin-top: 1%;
    border-radius: 5px;

    > div {
        display: flex;
        align-items: center;

        img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }

        h5 {
            margin-left: 1%
        }
    }


    > p {
        word-break: break-all;
        margin: 1%;
    }

    > svg {
        float: right;
        outline: none;
        height: 15px;
        width: 20px;
    }   
`

export const CommentForm = styled.form`
    display: flex;
    width: 100%;
    
    textarea {
        width: 100%;
        resize: none;
    }

    > button {
        background-color: black;
        color: white;
        border: none;
        
        svg {
            height: 10px;
            width: 10px;
        }
    }
`

export const Container = styled.div`
    display: flex;
`

export const Dashboard = styled.div`
    height: 100%;
    > div {
        background-color: rgba(50,50,50,1);
        padding-top: 60px;
        padding-bottom: 10%;
        justify-content: center;
        height: inherit;
        display: grid;
        grid-template-columns: 25% 40% 30%;
        grid-gap: 1%;
        border: 1px solid black;
    }
`

export const Delete = styled.button`
    background: none;
    border-radius: 50%;
    margin-left: 1%;

    &:hover { 
        background-color: grey;
    }
`

export const DeleteAccount = styled.button`
    width: 100%;
    margin-top: 5%;
    font-size: 24px;
    background: rgb(255 0 0 / 40%);
    outline: none;

    &:active{
        transform: translateY(3px)
    }
`

export const Devsocial = styled.div`
    background-image: url(./dev.jpg);
    background-size: cover;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    > div { 
        width: 35%;
        height: 35%;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.85);
        padding: 1%;
        border-radius: 10px;
    }

    > div > div {
        display: inline-grid;
        grid-gap: 10px;
    }

    > div > div > button {
        font-size: 1.5rem;
    border-radius: 10px;

    &:hover {
        background-color: rgba(255, 180, 50, 1);
    }
`

export const Dropdown = styled.div`
    position: absolute;
    display: block;
    z-index: 1;
    top: 100%;
    right: 0;
    background-color: rgba(255, 180, 50, .8);

    a {
        float: none;
        color: black;
        padding: 12px 16px;
        border: 1px solid rgba(50, 50, 50, 1);
        text-decoration: none;
        display: block;
        text-align: left;
        width: 100%;
    
        &:hover {
            color: white;
            background-color: rgba(50, 50, 50, .8);
            border: 1px solid rgba(255, 180, 50, 1);
            cursor: pointer;
        }
    }
`

export const DropdownBtn = styled.a`
   
`

export const Error = styled.span`
    display: flex;
    justify-content: center;
    background-color: rgba(255, 0, 0, 0.3);

`

export const Follow = styled.button`
    background-color: rgba(255, 180, 50, 1);
    border: 1px solid black;
    white-space: nowrap;
    color: white;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
    letter-spacing: 0.1rem;
    border-radius: 0.5rem;
    user-select: none;
    transition: all 0.1s ease-in;

    ::-moz-focus-inner {
        border: 0;
    }

    &:hover {
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }

    &:active {
        background-color: white;
        color: black;
    }

`

export const FormFile = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
`

export const FormImage = styled.div`
    text-align: center;
    position: relative;
    width: fit-content;
    margin: auto;
`

export const FormLabel = styled.label`
    display: block;
    margin-top: 2%;

    > div {
        margin: auto;
        width: fit-content;
        position: relative;
    }

    > input {
        display: block; 
        width: 100%;
        font-size: 21px; 
        padding: 1%;
        box-sizing: border-box
    }

    > textarea {
        width: 100%;
        resize: none;
        box-sizing: border-box;
    }
`

export const FriendsAndFollowers = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
`

export const Header = styled.header`
    height: 50px;
    width: 100%;
    z-index: 9999 !important;
    position: fixed;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    background-color: rgba(255, 180, 50, 1);
    z-index: 3

    > div {
        display: flex;
    }
`

export const Headline = styled.h1`
    margin: 0;
    color: black;
    text-decoration: underline;
    padding-bottom: 1%;
`

export const LangSelect = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    width: 75%;
    margin: auto;
    background-color: white;
    border-radius: 10px 10px 0 0;
    place-items: center;
    
`

export const LangTools = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
`

export const List = styled.ul`
    list-style: none;
    text-align: left;
    line-height: 18px;
    margin-right: 5%;
`

export const ListItem = styled.li`
    display: flex;
    margin-top: 1%;
    padding: 1%;
    align-items: center;
    background-color: rgba(255, 180, 50, 1);
    &:hover {
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }

    > p {
        text-decoration: underline;
        margin-left: 5%;
        cursor: pointer;
        font-size: 16px;
    }

    > button {
        float: right;
        background-color: rgba(50, 50, 50, 1);
        border: 1px solid black;
        white-space: nowrap;
        color: white;
        cursor: pointer;
        outline: none;
        font-size: 1rem;
        text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
        letter-spacing: 0.1rem;
        border-radius: 0.5rem;
        user-select: none;
        transition: all 0.1s ease-in;

        ::-moz-focus-inner {
        border: 0;
        }

        &:hover {
        background-color: rgba(255, 180, 50, 1);
        color: white;
        }

        &:active {
        background-color: white;
        color: black;
        }

    }
`

export const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid rgba(255, 180, 50, .7);
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 40%;
  width: 15.0rem;
  height: 15.0rem;
  animation: ${Spin} 0.6s linear infinite;
`

export const Logo = styled.button`
    border: none;
    background: none;
    font-size: 1em;
    border-right: 1px solid black;
`

export const Main = styled.div`

`

export const Modal = styled.div`
    position: absolute;
    top: 10%;
    left: 35%;
    right: 35%;
    height: 60%;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    overflow-y: auto;
    color: black;
    z-index: 3;

    &::-webkit-scrollbar {
        border: 1px solid black;
        background-color: rgba(50, 50, 50, 1);
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        border-radius: 10px;
        background-color: rgba(255, 180, 50, .7);
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: rgba(245, 245, 245, 1);
        border-radius: 10px
    }
`

export const Nav = styled.button`
    background: none;
    outline: none;
    border: none;
    color: rgba(255,180,50,1);
    height: fit-content;
    font-size: xxx-large;
    align-self: center;

    > svg {
        height: 50px;
        width: 50px;
    }

    &:active {
        transform: translateY(2px)
    }
`

export const Overlay = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
`

export const Panel = styled.div`
    height: fit-content;
    margin-top: 30%;
    text-align: center;
    border: 1px solid rgba(255, 180, 50, 1);
    border-radius: 5px;
    background-color: white;
    padding: 0 10%;

    > div > h4 {
        cursor: pointer;
        text-decoration: underline;
    }

    > div > div > img {
        border-radius: 10px;
        margin: 2%;
    }
`

export const Post = styled.div`
    border: 1px solid black;
    margin: 1%;
    padding: 1%;
    font-size: 16px;


    > footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 1%;
    }

    > footer > svg {
        height: 15px;
        width: 20px;
    }

    > div {
        display: flex;
        align-items: center;
    }

    > div > img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    > div > h4 {
        margin-left: 1%;
        cursor: pointer;
    }

    > p {
        cursor: pointer;
    }
`

export const Posts = styled.div`
    border: 1px solid rgba(255, 180, 50, 1);
    background-color: white;
    overflow: auto;
    border-radius: 10px;
    height: 100%;
    &::-webkit-scrollbar {
        border: 1px solid black;
        border-radius: 10px;
        background-color: rgba(50, 50, 50, 1);
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        border-radius: 10px;
        background-color: rgba(255, 180, 50, .7);
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: rgba(245, 245, 245, 1);
        border-radius: 10px
    }

    > div {
        margin: 1%;
    }

    > div > input {
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        resize: none;
        color: #888;
        font-size: 18px;
        border: 2px solid;
        padding: 2%;
    }
`

export const PostAuthor = styled.div`
    display: flex;
    align-items: center;

    > img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    > h4 {
        margin-left: 1%;
    }

    > svg {
        height: 25px;
        width: 25px;
        float: right;
    }
`

export const PostButton1 = styled.button`
    font-size: 22px;
    background-color: rgba(50, 50, 50, 1);
    color: white;
    border-radius: 10px;

    &:hover {
        background-color: rgba(255, 0, 0, 1);
    }
`

export const PostButton2 = styled(PostButton1)`
    &:hover {
        background-color: rgba(0, 0, 255, 1);
    }
`

export const PostForm = styled.form`
    background-color: rgba(255, 180, 50, 1);
    padding: 1% 2%;
    border-radius: 5px;
    position: absolute;
    left: 30%;
    right: 30%;
    top: 0px;
    z-index: 3;
    text-align: center;

    > div {
        display: flex;
        justify-content: space-evenly;
    }

    > textarea {
        resize: none;
        width: 100%;
        font-size: 18px;
    }
`

export const Profile = styled.div`
    border: 1px solid rgba(255, 180, 50, 1);
    background-color: white;
    border-radius: 5px;
    text-align: center;
    height: fit-content;

    > div {
        display: flex;
        justify-content: space-evenly
    }

    > img {
        border-radius: 15px;
        border: 1px solid black;
    }

    > button {
        margin: 10px;
    }

    > p {
        text-align: center;
        color: white;
        background-color: red;
    }
`

export const ProfileEdit = styled.div`
    padding: 5%;
    width: 50%;
    margin: auto;
    background-color: white;
    border 3px solid rgba(255, 180, 50, 1);
`

export const ProfileInfo = styled.div`
    border-top: 1px solid;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: inherit;
    padding: 1%
`

export const ProfilePage = styled.div`
    height: 100%;
    background-color: rgba(50, 50, 50, 1);
`

export const Provider = styled.button`
   
`

export const ReadMoreLess = styled.button`
    background: none;
    border: none;
    outline: none;
    margin: 0;
    text-decoration: underline;
`

export const Result = styled.div`
    padding: 1%;
    text-align: center;
    position: relative;
    border-radius: 10px;
    background-color: white;

    > h5 {
        margin: 2%;
        text-decoration: underline;
        cursor: pointer;
    }

    > footer {
        margin: 5%;
    }

    > footer > svg {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 5%;
        height: 20px;
        width: 20px;
    }

    > img {
        height: 200px; 
        width: 200px;
        border-radius: 5%;
    }
`

export const Results = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto) ;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1%;
    width: 90%;
    margin: 1%;
`

export const ResultsPage = styled.div`
   overflow: hidden;

   > h2 {
       margin: 0;
       text-align: center;
       padding: 5% 0 1% 0;
       color: white;
   }

   > div {
       display: flex;
       justify-content: center;
   }
`

export const ResultsTag = styled.div`
    display: flex;

    > strong {
        width: 200px;
        align-self: center;
    }

    > svg {
        padding: 1%;
    }
`

export const ResultTitle = styled.h2`
    margin: 0;
    text-align: center;
    padding: 5% 0 1% 0;
    color: white;
`

export const SaveProfile = styled.button`
    width: 100%;
    margin-top: 5%;
    font-size: 24px;
    background: rgb(0 0 255 / 40%);
    outline: none;

    &:active{
        transform: translateY(3px)
    }
`

export const Search = styled.input`
    border-radius:50%;
    width:40px;
    cursor:pointer;
    height:40px;
    margin: 1%;
    background-color:white;
    outline:none;
    background-image:url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-256.png");
    background-size:30px;
    background-position:50%;
    font-size:18px;
    color:grey;
    background-repeat:no-repeat;
    border:1px solid grey;
    transition-property:width, border-radius, background-position, padding-left/*, transform*/;
    transition-duration:0.5s;
    }
    
    &:focus {
    /*transform:rotate(-360deg);*/
    width:330px;
    border-radius:5px;
    cursor:text;
    padding-left:40px;
    padding-right:20px;
    background-position:5px;
    }
`

export const SelectDiv = styled.div`
    border: 1px solid black;
    margin: 5%;
    position: relative;
    padding: 5%;
    text-align: center;
    width: 75%;
    border-radius: 10px;
    background-color: ${props => props.checked ? 'rgba(50, 50, 50, 1)' : 'rgba(255, 180, 50, 1)'};
    color: ${props => props.checked ? 'white' : 'black'};

    &:hover {
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }

    > label {
        display: block;
        width: 100%;
        height: 100%;
        transition: all 250ms ease-out;

        input {
        display: none;
        &:checked + label {
            color: white;
            }
        }
    }

`

export const Selections = styled.div`
    text-align: center;

    > div {
        margin-top: 5%;
    }
`

export const SelectPage = styled.div`
    height: 100%;
    padding-top: 5%;
    text-align: center;
    color: white;
    background-color: 250, 250, 250, .5;

    > footer {
        display: flex;
        justify-content: space-evenly;
        margin: auto;
        width: 75%;
        background-color: white;
        border: 1px solid black;
        
        > button {
            font-size: 26px;
            background-color: rgba(50, 50, 50, 1);
            border-radius: 5px;
            color: white;
            margin: 1%;
        }
    }
`

export const SignInButton = styled.button`
    
`

export const SignInPage = styled.div`
    display: flex;
    height: 100%;
    background-color: rgba(255, 180, 50, 1);

    > div {
        font-size: 28px;
        background-color: rgba(50, 50, 50, 1);
        color: white;
        padding: 1%;
        width: 30%;
        margin: auto;
        text-align: center;
        border-radius: 15px;
        height: 50%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }

    > div > div > button {
        width: 80%;
        padding: 1%;
        background-color: white;;
        border: 1px solid hsla(40, 72%, 60%, 1);
        white-space: nowrap;
        color: black;
        cursor: pointer;
        outline: none;
        font-size: 1.2rem;
        text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
        letter-spacing: 0.1rem;
        border-radius: 0.5rem;
        user-select: none;
        transition: all 0.1s ease-in;
    
        ::-moz-focus-inner {
        border: 0;
        }
    
        &:active {
          transform: translateY(-3px);
          background-color: rgba(210, 120, 0, 0.8);
        }
    
        &:hover {
        background-color: rgba(210, 120, 0, 0.8);
        color: white;
        }
       
    }
`

export const SinglePost = styled.div`
    width: 50%;
    margin: auto;
    background-color: white;
    border: 1px solid rgba(255, 180, 50, 1);
    word-break: break-word;
    padding: 5%;

    > svg {
        height: 25px;
        width: 25px;
        float: right;
    }

    > p {
        margin-top: 5%;
    }
`

export const Strong = styled.strong`
    position: absolute;
    cursor: pointer;
    margin: 1%;
    margin-left: 25%;
`

export const Tab = styled.button`
    background: none;
    font-size: 18px;
    border-style: solid;
    border-color: rgba(50, 50, 50, 1);
    border-width: 2px 2px 0 2px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const Tags = styled(TagCloud)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 1%;
    padding: 5% 0 5% 0;
`

export const Unfollow = styled(Follow)`
 background-color: rgba(255, 180, 50, .5)
`

export const User = styled.div`
    float:right;
    overflow: hidden; 
    display: flex;
    justify-content:space-between; 
    width: 5%;

    > svg {
        height: 100%;
        border-left: 1px solid 
    }
`