import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
const AssetProperties = ({ uri }) => {

    const removePrefix = (uri) => {
        return uri.substring(7, uri.length);
      };
    const [response, setResponse] = useState([]);
    const metadata = async () => {
        const { data } = await axios.get(
            `https://cloudflare-ipfs.com/ipfs/${removePrefix(uri)}`
        );
        setResponse(data.attributes?data.attributes:'');
    }
    useEffect(() => {
        metadata();
    }, [uri]);
    return (
        response.length>1 && (
        <div className="border rounded-md w-full px-4 py-3">
        <h3 className="text-gray-700 font-medium text-gray-500 dark:text-white">Properties</h3>
        <div style={{ minHeight: 80 }}>
            {response.length > 0 ? response.map((item) => {
                const width = item.value;
                return (<div
                    key={item.id}
                    className="my-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full hover:scale-105 duration-200 transform transition cursor-pointer">
                    <div className=" flex items-center justify-between px-4 mb-2">
                        <div className="flex items-center">
                            <div className="font-extralight">{item && item.trait_type}</div>
                        </div>
                    </div>
                    {
                        item.display_type === "boost_number" && (
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: `${width}%` }}> {width}%</div>
                            </div>)
                    }
                    {
                        item.display_type === "boost_percentage" && (
                            <div className="p-2.5">
                            <CircularProgress percent= {width} size="100" fontColor= "green"/>
                            </div>
                        )
                    }   
                    
                </div>)
            }) : null}
        </div>
        </div>)
    )
}

export default AssetProperties;