import React from "react";

interface FormButtonProps extends React.ComponentPropsWithoutRef<'button'>{
  children: React.ReactNode
  isLoading?: boolean
  className?: string
}

const FormButton = () => {
  return (
    <button>Button</button>
  );
};

export default FormButton;