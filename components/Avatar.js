function Avatar({ url }) {
    return (
        <img 
            className="h-10 rounded-full cursor-pointer transition-duration-500 transform hover:scale-110"
            src={url}
            alt = "profile pic"
            loading = "lazy"
            
        />
    )
}

export default Avatar;