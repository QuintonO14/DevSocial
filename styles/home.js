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

export const BigScreen = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;

    section {
        width: 50%;
    }

    > div {
        width: 50%;
    }
`

export const BlockedPosts = styled.div`
    background-color: white;
    height: fit-content;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
    border-radius: 0.25rem;
`

export const CloseModal = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    border: none;
    font-size: 1.1rem;
`

export const Comment = styled.div`
    border: 1px solid;
    padding: 0.25rem;
    font-size: 0.75rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;

    > div {
        display: flex;
        align-items: center;

        img {
            height: 2rem;
            width: 2rem;
            border-radius: 1rem;
        }

        h5 {
            margin-left: 0.25rem;
        }
    }


    > p {
        word-break: break-all;
        margin: 0.25rem;
    }

    > svg {
        float: right;
        outline: none;
        height: 0.75rem;
        width: 1rem;
    }   
`

export const CommentForm = styled.form`
    display: flex;
    width: 100%;
    box-shadow: 0 2px 2px -1px;

    
    textarea {
        width: 100%;
        resize: none;
    }

    > button {
        background-color: black;
        color: white;
        border: none;
        
        svg {
            height: 0.5rem;
            width: 0.5rem;
        }
    }
`

export const Container = styled.div`
    display: flex;
`

export const Dashboard = styled.div`
    height: 100%;
    
    &:first-child {
        background-color: rgba(50,50,50,1);
        padding-bottom: 10%;
        display: flex;
        position: relative;
        flex-direction: column;
        height: auto;
    }

    > div > button {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        width: fit-content;
        padding: .5rem;
        border-radius: 1rem;
        background-color: rgba(255, 180, 50, 0.6)
    }

    > div > button > svg {
        height: 1rem;
        width: 1rem;
    }

`

export const DeleteAccount = styled.button`
    width: 100%;
    margin-top: 1rem;
    font-size: 1.2rem;
    background: rgb(255 0 0 / 40%);
    outline: none;
    border-radius: .5rem;

    &:active{
        transform: translateY(3px)
    }
`

export const Devsocial = styled.div`
    background: url(./dev.jpg) no-repeat center fixed;
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    > div { 
        text-align: center;
        background-color: rgba(255, 255, 255, 0.85);
        padding: 0.625rem;
        border-radius: 0.5rem;
    }

    > div > div {
        display: inline-grid;
        grid-gap: 0.625rem;
    }

    > div > div > button {
        font-size: 1.5rem;
    border-radius: 0.5rem;

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
    background-color: rgba(255, 180, 50, .9);

    a {
        float: none;
        color: black;
        padding: 0.5rem;
        border: 2px solid rgba(50, 50, 50, 1);
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
    margin-bottom: 0.75rem;

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
    margin: auto;

    img {
        width: 50%
    }
`

export const FormLabel = styled.label`
    display: block;
    margin-top: 0.75rem;

    div {
        margin: auto;
        width: fit-content;
        position: relative;
    }

    input {
        display: block; 
        width: 100%;
        font-size: 1.1rem; 
        padding: 1%;
        box-sizing: border-box
    }

    textarea {
        width: 100%;
        resize: none;
        box-sizing: border-box;
    }
`

export const FriendsAndFollowers = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Header = styled.header`
    width: 100%;
    z-index: 9999 !important;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    background-color: rgba(255, 180, 50, 1);

    > div {
        display: flex;
    }
`

export const LangSelect = styled.div`
    background-color: white;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        display: block;
    }
    
`

export const LangTools = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
`

export const List = styled.ul`
    list-style: none;
    text-align: left;
    line-height: 1rem;
    margin-right: 1.5rem;
`

export const ListItem = styled.li`
    display: flex;
    margin-top: .625rem;
    padding: .625rem;
    align-items: center;
    background-color: rgba(255, 180, 50, 1);
    &:hover {
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }

    &:hover > button {
        background-color: rgba(255, 180, 50, 1);
    }

    p {
        text-decoration: underline;
        margin: auto;
        cursor: pointer;
        font-size: 1rem;
    }

    button {
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
  height: 10rem;
  width: 10rem;
  margin: auto;
  animation: ${Spin} 0.6s linear infinite;
`

export const Logo = styled.button`
    border: none;
    background: none;
    font-size: 0.75rem;
    &:before {
        content: "DevSocial"
    }
    
    @media (max-width: 600px) {
        &:before {
            content: url("/home.svg");
        }
        content: url("/home.svg");
        height: 2rem;
        width: 2rem;
    }
`

export const Modal = styled.div`
    position: absolute;
    height: 60vh;
    width: 90%;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    overflow-y: auto;
    color: black;
    z-index: 3;

    @media (min-width:768px) {
        width: 70%;
        left: 15%;
        right: 15%;
        top: 0
    }

    @media (min-width: 1024px) {
        width: 90%;
        left: 5%;
        right 5%;

    }

    ul > li > p {
        font-size: .75rem;
    }

    ul > li {
        border-radius: 0.5rem;
        padding: 0.3rem;
    }

    h1 {
        font-size: 1.5rem;
    }

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
    align-self: center;

    > svg {
        height: 3rem;
        width: 3rem;
    }

    &:active {
        transform: translateY(2px)
    }
`

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
`

export const Panel = styled.div`
    height: fit-content;
    text-align: center;
    margin: auto;
    margin-top: 1rem;
    width: 90%;
    border: 1px solid rgba(255, 180, 50, 1);
    border-radius: 0.25rem;
    background-color: white;

    div {
        margin: auto;
    }

    div > h4 {
        cursor: pointer;
        text-decoration: underline;
    }

    div > div > img {
        border-radius: .5rem;
        height: 2.25rem;
        width: 2.25rem;
        margin: 0.4rem;
    }
`

export const Post = styled.div`
    background-color: white;
    margin: 0.1rem;
    padding: 0.1rem;
    font-size: 1rem;

    footer {
        display: flex;
        justify-content: flex-end;
        padding-top: 0.1rem;
    }

    footer > svg {
        height: 1rem;
        width: 1rem;
    }

    div {
        display: flex;
        align-items: center;
    }

    div > img {
        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
    }

    div > h4 {
        margin-left: 0.5rem;
        cursor: pointer;
    }

    p {
        cursor: pointer;
    }
`

export const Posts = styled.div`
    border: 1px solid rgba(255, 180, 50, 1);
    background-color: rgba(50, 50, 50, 1);
    overflow: auto;
    border-radius: 10px;
    margin-top: 3rem;
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

    > div > input {
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        resize: none;
        color: #888;
        font-size: 1.1rem;
        border: 2px solid;
        padding: 0.625rem;
    }
`

export const PostAuthor = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 3rem;
        width: 3rem;
        border-radius: 1rem;
    }

    h4 {
        margin-left: .625rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
        float: right;
    }
`

export const PostButton1 = styled.button`
    font-size: 1.2rem;
    background-color: rgba(50, 50, 50, 1);
    color: white;
    border-radius: 0.625rem;

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
    border-radius: 0.25rem;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 3;
    text-align: center;
    padding-top: 1rem;

    div {
        display: flex;
        justify-content: space-evenly;
    }

    textarea {
        resize: none;
        width: 95%;
        font-size: 18px;
        box-sizing: border-box;
    }

   
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255, 180, 50, 1);
    background-color: white;
    border-radius: 0.5rem;
    text-align: center;
    width: 95%;
    margin: auto;
    margin-top: 3rem;

        h1 {
            font-size: 1.2rem;
        }

        div {
            display: flex;
            width: 100%;
            justify-content: space-evenly
        }
        
        img {
            border-radius: .75rem;
            border: 3px solid black;
            width: 75%;
            margin-bottom: 0.75rem;
        }
    @media(min-width: 600px){
        img {
            width: 50%
        }
    } 
`

export const ProfileEdit = styled.div`
    padding: 2rem 1rem;
    height: 100%;
    position: relative;
    background-color: white;

    @media (min-width: 1024px) {
        width: 50%;
        margin: auto;
        height: 100%;
    }
`

export const ProfileInfo = styled.div`
    border-top: 1px solid;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: inherit;
    font-size: .8rem;
`

export const ProfilePage = styled.div`
    height: auto;
    background-color: rgba(50, 50, 50, 1);
`

export const ReadMoreLess = styled.button`
    background: none;
    border: none;
    outline: none;
    margin: 0;
    text-decoration: underline;
`

export const Result = styled.div`
    text-align: center;
    position: relative;
    border-radius: 0.625rem;
    background-color: white;
    margin: auto;
    margin-top: 0.5rem;
    width: 75%;

    @media(min-width: 400px) {
        width: 40%;
        display: inline-block;
        margin: 0.5rem;
    }

    @media(min-width: 768px) {
        margin: 0.5rem;
        display: inline-block;
        width: 20%;
    }

    h2 {
        font-size: 1rem;
        text-decoration: underline;
        cursor: pointer;
    }

    footer > svg {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 5%;
        height: 20px;
        width: 20px;
    }

    img {
        height: 6rem; 
        width: 6rem;
        border-radius: 0.25rem;
    }
`

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 3rem;
    background-color: rgba(50, 50, 50, 1);

    @media(min-width: 400px){
        display: block;
        margin: auto;
        text-align: center;
    }

    @media(min-width: 768px) {
       display: block;
       margin: auto;
       text-align: center;
    }

    div {
        background-color: white;
    }

    button {
        width: fit-content;
        font-size: 1.2rem;
        margin: auto;
        padding: 0.2rem;
        border-radius: 0.25rem;
        border: 1px solid;
        background-color: rgba(255, 180, 50, 0.7);
    }
`

export const ResultsPage = styled.div`
   height: 100%;

   h1 {
       padding-top: 3rem;
       margin: 0;
       text-align: center;
       color: rgba(255, 180, 50, 1);
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
    margin-top: 1rem;
    font-size: 1.2rem;
    background: rgb(0 0 255 / 40%);
    outline: none;
    border-radius: .5rem;

    &:active{
        transform: translateY(3px)
    }
`

export const Search = styled.input`
    border-radius:50%;
    width:2rem;
    cursor:pointer;
    height:2rem;
    margin-left: 0.25rem;
    background-color:white;
    outline:none;
    background-image:url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-256.png");
    background-size:1.5rem;
    background-position:50%;
    font-size:1rem;
    color:grey;
    background-repeat:no-repeat;
    border:1px solid grey;
    transition-property:width, border-radius, background-position, padding-left/*, transform*/;
    transition-duration:0.5s;
    }
    
    &:focus {
    /*transform:rotate(-360deg);*/
    width:100%;
    border-radius:5px;
    cursor:text;
    padding-left:40px;
    padding-right:20px;
    background-position:5px;

        @media(min-width: 786px){
            width: 50%;
        }
    }

    @media(min-width: 1024px) {
        margin: 0.1rem;
    }
  
`

export const SelectDiv = styled.div`
    border: 1px solid black;
    position: relative;
    text-align: center;
    width: 90%;
    margin: 0.5rem;
    border-radius: 0.25rem;
    background-color: ${props => props.checked ? 'rgba(50, 50, 50, 1)' : 'rgba(255, 180, 50, 1)'};
    color: ${props => props.checked ? 'white' : 'black'};

    &:hover {
        background-color: rgba(50, 50, 50, 1);
        color: white;
    }

    label {
        display: block;
        width: 100%;
        font-size: x-large;
        height: 100%;
        padding: 0.5rem 0;
        transition: all 250ms ease-out;

        input {
        display: none;
        &:checked + label {
            color: white;
            }
        }
    }

    @media(min-width:600px){
        display: inline-block;
        width: 40%;
    }

    @media(min-width:1024px){
        display: inline-block;
        width: 20%;
    }

`

export const Selections = styled.div`
    text-align: center;

    > div {
        margin-top: 1rem;
    }
`

export const SelectPage = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: 250, 250, 250, .5;

    h1 {
        margin: 0;
        padding: 0;
    }

    button {
        padding: 0.5rem 2rem;
        border-radius: 0.25rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
        font-size: 1.1rem;
    }

    footer {
        width: 90%;
        margin: auto;
        display: flex; 
        justify-content: center;
    }

    @media(min-width: 600px){
        h1 {
            margin: 1rem;
        }
    }

    @media(min-width: 1024px){
       footer {
            margin: 0;
            width: 100%;
       }
    }
`

export const SignInPage = styled.div`
    display: flex;
    height: 100%;
    background-color: rgba(255, 180, 50, 1);

    > div {
        padding : 1rem; 
    }

    div {
        font-size: 1.2rem;
        background-color: rgba(50, 50, 50, 1);
        color: white;
        margin: auto;
        width:100%;
        text-align: center;
        border-radius: 1rem;
        height: 50%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }

    div > div > button {
        background-color: white;;
        border: 1px solid hsla(40, 72%, 60%, 1);
        white-space: nowrap;
        color: black;
        cursor: pointer;
        padding: 1rem;
        outline: none;
        font-size: 1.0rem;
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
    @media (min-width: 640px) {
        > div {
            width: 75%;
            height: 75%;
            text-align: center
        }
    }

    @media (min-width: 1024px) {
        > div {
            height: 70%;
            width: 50%;
        }
    }

    @media (min-height: 1024px) {
        > div {
            height: 50%;
        }
    }

   
`

export const SinglePost = styled.div`
    margin: auto;
    height: 100vh;
    padding: 3rem 1rem;
    background-color: white;
    border: 1px solid rgba(255, 180, 50, 1);
    word-break: break-word;

    svg {
        height: 1rem;
        width: 1rem;
        float: right;
    }

    @media(min-width: 768px){
        width: 75%;
    }
`

export const Tab = styled.button`
    background: none;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.2rem;
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
    margin-top: 0.625rem;
    padding: 0.5rem 0;
`

export const Unfollow = styled(Follow)`
    background-color: rgba(255, 180, 50, .5)
`

export const User = styled.div`
    float:right;
    overflow: hidden; 

    svg {
        height: 2rem;
        width: 1.5rem;
        margin: 0.3rem;
    }
`