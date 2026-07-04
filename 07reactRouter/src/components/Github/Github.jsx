import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


function Github() {
    /*const [data, setData] = useState()
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
    }, [])*/
    const data = useLoaderData()
    // if (!data) return <p>Loding...</p>
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">

            {/* Header */}
            <h1 className="text-3xl font-bold text-white mb-6">
                Github Profile
            </h1>

            {/* Card */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-3xl flex flex-col md:flex-row items-center gap-6">

                {/* Profile Image */}
                <div>
                    <img
                        src={data?.avatar_url}
                        alt="Github profile"
                        className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-md"
                    />
                </div>

                {/* Info */}
                <div className="text-white space-y-2">
                    <p><span className="text-blue-400 font-semibold">Name:</span> {data?.name}</p>
                    <p><span className="text-blue-400 font-semibold">Followers:</span> {data?.followers}</p>
                    <p><span className="text-blue-400 font-semibold">Location:</span> {data?.location}</p>
                    <p><span className="text-blue-400 font-semibold">Joined:</span> {new Date(data?.created_at).toLocaleDateString()}</p>
                    <p><span className="text-blue-400 font-semibold">Twitter:</span> {data?.twitter_username || "N/A"}</p>
                </div>

            </div>

            {/* Description Section */}
            <div className="bg-gray-800 mt-6 p-6 rounded-2xl shadow-md max-w-3xl text-gray-300 leading-relaxed">
                <p>
                    Chai aur Code is a popular coding platform run by Hitesh Choudhary that focuses on teaching programming in a simple and practical way. The content is beginner-friendly and explained in a mix of Hindi and English, making it easy to understand complex concepts. It emphasizes hands-on learning through real-world projects such as JavaScript, React, and API-based applications, rather than just theory. This approach helps students not only learn concepts but also apply them by building projects. Overall, it provides a strong foundation, but consistent practice and revision are essential.
                </p>
            </div>

        </div>)
}

export default Github

export const githubLoader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}
