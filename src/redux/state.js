let renderDom = () => {
    // console.log('render')
}

let state = {
    dialogsPage: {
        dialogsData: [
            {
                name: "Linda Lohan",
                message: "Hi there, how are you",
                time: "a min ago",
                unreaded: "2",
                link: "/dialogs/contact-1",
                image: "images/users/user-2.jpg"
            },
            {
                name: "Julia Cox",
                message: "see you soon",
                time: "an hour ago",
                link: "/dialogs/contact-2",
                image: "images/users/user-3.jpg"
            },
            {
                name: "Sophia Lee",
                message: "Okay fine. thank you",
                time: "13 hour ago",
                link: "/dialogs/contact-3",
                image: "images/users/user-4.jpg"
            },
            {
                name: "John Doe",
                message: "hey anybody there",
                time: "Yesterday",
                unreaded: "1",
                link: "/dialogs/contact-4",
                image: "images/users/user-5.jpg"
            },
            {
                name: "Anna Young",
                message: "I gotta go",
                time: "2 days ago",
                link: "/dialogs/contact-5",
                image: "images/users/user-6.jpg"
            },
            {
                name: "Richard Bell",
                message: "Hey there?",
                time: "2 days ago",
                unreaded: "1",
                link: "/dialogs/contact-6",
                image: "images/users/user-7.jpg"
            }
        ]
    },
    posts: [
        {
            name: 'Alexis Clark',
            published: '3 mins',
            likes: '12',
            dislikes: '1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            comments: [
                {
                    name: 'Diana',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    userImage: 'images/users/user-11.jpg'
                },
                {
                    name: 'John',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
                    userImage: 'images/users/user-4.jpg'
                },
            ],
            newComment: {
                text: '',
            }
        }
    ]
}

export let updateCommentText = (updatedCommentText, post) => {
    post.newComment.text = updatedCommentText;

    renderDom();
}

export let createComment = (comment, prevComments) => {
    // console.log(prevComments)
    // console.log(comment.current)
    prevComments.push({
        name: 'User',
        text: comment,
        userImage: 'images/users/user-1.jpg'
    });

    renderDom();
}

export let subscribe = (observer) => {
    renderDom = observer;
}

export default state;