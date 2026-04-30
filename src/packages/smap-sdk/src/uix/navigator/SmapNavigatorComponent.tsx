"use client";

import React from 'react';
import {SmapNavigator} from "./SmapNavigator";

interface Props {
    navigator: SmapNavigator;
    currentPage: string;
    onPageChange: (id: string) => void;
}

export const SmapNavigatorComponent: React.FC<Props> = ({
                                                            navigator,
                                                            currentPage,
                                                            onPageChange
                                                        }) => {
    return (
        <nav className={navigator.getContainerClasses()}>
            {navigator.items.map((item) => (
                <button
                    key={item.id}
                    disabled={item.disabled}
                    onClick={() => onPageChange(item.id)}
                    className={`p-4 transition-colors ${
                        navigator.isActive(item.id, currentPage)
                            ? 'bg-blue-500 text-white'
                            : 'hover:bg-gray-200'
                    }`}
                >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                </button>
            ))}
        </nav>
    );
};