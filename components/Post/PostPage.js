import React, { useState, useEffect } from 'react'
import axios from 'axios'
const PostPage = () => {
    const [myData, setMyData] = useState([])
    const [count, setCount] = useState(0)
    const decrement = () => {
        if (count > 0) {
            setCount(count - 10)
        } else {
            setCount(0)
        }
    }

    const increment = () => {
        if (count < myData.length) {
            setCount(count + 10)
        } else {
            setCount(myData.length)
        }
        console.log('count', count);

    }

    console.log('myData', myData)
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setMyData(res.data))
    }, [])



    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-2 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {myData.slice(count, count + 9).map((postData, index) => {
                            const { id, title, body } = postData
                            return (
                                <div class="p-4 lg:w-1/3" key={index}>
                                    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center relative" >

                                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{id}</h2>
                                        <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{title}</h1>
                                        <p class="leading-relaxed mb-3 text-left">{body}</p>

                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
            <div className="flex mx-auto gap-10 justify-center mt-5">
                {count > 0 && <button onClick={decrement} className="bg-gray-300   hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Show Less</button>}
                {count < myData.length && <button onClick={increment} className="bg-gray-300  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Show More</button>}
            </div>

        </div>
    )
}

export default PostPage