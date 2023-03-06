import React from "react";

interface Props{
    height: number;
    width: number;
}

export default function Icon({ height, width }: Props):JSX.Element {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${height}`}
                height={`${width}`}
                fill="none"
                viewBox="0 0 140 50"
            >
                <path
                    fill="#fff"
                    d="M66.36 17h8.56v2.6H69.6v3.18h5.32v2.54H69.6v3.08h5.32V31h-8.56V17zm20.837 4.92h-.02V31h-3.04v-1.36c-.267.48-.68.873-1.24 1.18a3.788 3.788 0 01-1.82.44c-.934 0-1.747-.22-2.44-.66-.68-.44-1.2-1.04-1.56-1.8-.36-.773-.54-1.647-.54-2.62 0-.96.186-1.827.56-2.6a4.337 4.337 0 011.6-1.82c.706-.44 1.513-.66 2.42-.66.68 0 1.286.147 1.82.44.533.293.933.693 1.2 1.2V17h3.06v4.92zm-5.24 6.8c.733 0 1.3-.24 1.7-.72.4-.48.6-1.087.6-1.82 0-.72-.2-1.32-.6-1.8-.4-.48-.967-.72-1.7-.72-.694 0-1.254.233-1.68.7-.414.467-.62 1.073-.62 1.82 0 .747.206 1.36.62 1.84.426.467.986.7 1.68.7zm11.22 2.54c-1.147 0-2.027-.34-2.64-1.02-.613-.693-.92-1.667-.92-2.92v-5.96h3.1v5.28c0 .68.127 1.193.38 1.54.253.333.66.5 1.22.5.627 0 1.093-.187 1.4-.56.307-.373.46-.9.46-1.58v-5.18h3.04V31h-3.04v-1.38c-.28.52-.673.927-1.18 1.22-.493.28-1.1.42-1.82.42zm12.971.04c-1.04 0-1.953-.213-2.74-.64a4.502 4.502 0 01-1.8-1.8c-.413-.773-.62-1.667-.62-2.68 0-1.013.207-1.9.62-2.66a4.502 4.502 0 011.8-1.8c.787-.427 1.7-.64 2.74-.64 1.427 0 2.587.353 3.48 1.06.894.707 1.4 1.667 1.52 2.88h-3.06c-.106-.453-.32-.793-.64-1.02-.306-.227-.733-.34-1.28-.34-.666 0-1.186.22-1.56.66-.373.44-.56 1.06-.56 1.86s.187 1.42.56 1.86c.374.44.894.66 1.56.66.547 0 .974-.107 1.28-.32.32-.213.534-.533.64-.96h3.06c-.12 1.187-.626 2.133-1.52 2.84-.893.693-2.053 1.04-3.48 1.04zm6.753-9.94h3.06v2.02c.16-.693.486-1.227.98-1.6a2.702 2.702 0 011.68-.58c.32 0 .586.027.8.08v2.84c-.36-.04-.667-.06-.92-.06-.787 0-1.407.26-1.86.78-.454.52-.68 1.333-.68 2.44V31h-3.06v-9.64zm11.75 9.9c-.934 0-1.747-.22-2.44-.66-.68-.44-1.2-1.04-1.56-1.8-.36-.773-.54-1.647-.54-2.62 0-.96.186-1.827.56-2.6a4.33 4.33 0 011.6-1.82c.706-.44 1.513-.66 2.42-.66.68 0 1.286.147 1.82.44.533.293.933.693 1.2 1.2v-1.38h3.04V31h-3.04v-1.36c-.267.48-.68.873-1.24 1.18a3.79 3.79 0 01-1.82.44zm.88-2.54c.733 0 1.3-.24 1.7-.72.4-.48.6-1.087.6-1.82 0-.72-.2-1.32-.6-1.8-.4-.48-.967-.72-1.7-.72-.694 0-1.254.233-1.68.7-.414.467-.62 1.073-.62 1.82 0 .747.206 1.36.62 1.84.426.467.986.7 1.68.7zm12.82-.1c.427 0 .78-.02 1.06-.06V31c-.586.107-1.266.16-2.04.16-.973 0-1.786-.233-2.44-.7-.653-.467-.98-1.413-.98-2.84v-3.84h-1.52v-2.42h1.52V18.5h3.06v2.86h2.18v2.42h-2.18v3.2c0 .653.114 1.093.34 1.32.227.213.56.32 1 .32z"
                ></path>
                <rect width="50" height="50" fill="#6440FB" rx="22"></rect>
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M12.999 23.539l1.5.878v7.024l1.499.879 1.5.878 1.499.88 1.5.878 1.499.879 1.5.879 1.499.879 1.5-.88 1.499-.878 1.5-.879 1.499-.879 1.5-.879 1.499-.878 1.5-.88V24.419l1.499-.88v3.18a.444.444 0 00-.208.372c0 .151.071.273.178.352l-.051.154-.302.942h1.206l-.301-.942-.051-.154a.402.402 0 00.177-.352.465.465 0 00-.288-.413v-3.351L25.362 16.3l.362-.213 12.001 7.026.776-.453L40 21.78l-1.5-.878-1.499-.879-1.5-.879L34 18.268 32.5 17.39 31 16.51l-1.499-.876-1.5-.879-1.499-.879L25 13l-1.5.879-1.499.879-1.502.876-1.5.879-1.499.879-1.5.876-1.499.879-1.5.879-1.499.879L10 21.78l1.5.879 1.499.879zM23.5 20.905l1.5-.88 1.5.88 1.499.878-1.5.88L25 23.54l-1.5.877v1.757l1.5.88 1.5-.88 1.499-.879 1.5-.878 1.499-.88 1.5-.878 1.03-.605.469-.274-1.274-.745-.225-.131-1.5-.88-1.5-.878-1.497-.879-1.499-.879-1.5-.879-1.502.882-1.499.876-1.5.879-1.499.879-1.5.879-1.499.878 1.5.88v7.023l1.499.878 1.5.88 1.499.878 1.5.879L25 34.08l1.5-.879 1.499-.879 1.5-.879 1.499-.879 1.5-.878v-3.513l-1.5.879-1.5.878-1.499.88-1.5.878-1.499.879-1.5-.881-1.499-.88-1.5-.878V22.66l1.5-.88 1.5-.875z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    );
}