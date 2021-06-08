function Avatar({ url }) {
    return (
        <img 
            className="h-10 rounded-full"
            src={url}
            alt = "profile pic"
            loading = "lazy"
            
        />
    )
}

export default Avatar;