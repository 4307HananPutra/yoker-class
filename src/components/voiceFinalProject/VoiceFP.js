import Avatar from "./AvatarFP";

export default  function Voice() {
    return (
        <div className="border rounded-lg shadow-lg px-5 w-full max-w-md h-80 bg-base-100">
            <h1 className="text-xl my-4 mb-8">Voice Channel</h1>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
        </div>
    )
}