
export const Container = ({ children, className }) => {
    return (
        <div
            className={`mx-auto 2xl:max-w-[1360px] xl:max-w-[1190px] lg:max-w-[990px] md:max-w-[890px] px-4 lg:p-0 sm:max-w-[520px] w-full${className ? " " + className : "" }`}
        >
            {children}
        </div>
    );
};
