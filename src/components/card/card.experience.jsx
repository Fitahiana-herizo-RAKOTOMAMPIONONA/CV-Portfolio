
import React from 'react';

export default function CardExperience(props) {
    return (
        <div className={`w-full p-6 rounded-2xl text-white ${props.className}`}>
            <h2 className="text-2xl font-bold mb-4 capitalize text-center">{props.title}</h2>
            
            {props.data.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="mb-4 border-b border-gray-700 pb-4 bg-[#1E2329]  p-5 max-w-[700px] rounded-2xl m-auto">
                        <div className="text-white text-xl pt-3 pb-3 font-semibold">{item.poste}</div>
                        <div className="flex items-center mb-2">
                            {item.image ? (
                                <img 
                                    src={item.image} 
                                    alt={`${item.company} logo`} 
                                    className="w-8 h-8 mr-3 rounded"
                                />
                            ) : (
                                <div className="w-8 h-8 mr-3 rounded bg-gray-600 flex items-center justify-center">
                                    <span className="text-xs">
                                        {item.image ? item.company.charAt(0) : '?'}
                                    </span>
                                </div>
                            )}
                            <div>
                                <div className="text-lg font-semibold">{item.company}</div>
                                <div className="text-sm text-gray-400">{item.title}</div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-400">{item.date}</div>
                        <p className="text-sm mt-2">{item.description}</p>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}