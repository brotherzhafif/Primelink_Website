const LoadingSpinner = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-white/70 flex justify-center items-center z-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  