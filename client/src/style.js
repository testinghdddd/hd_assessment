const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading1: "text-center font-poppins font-semibold xs:text-[33.6px] text-[28px] text-white xs:leading-[53.76px] leading-[46.76px] w-full",
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2form: "self-center font-poppins font-semibold xs:text-[42px] text-[35px] text-white xs:leading-[76.8px] leading-[66.8px]",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    headingCourse: "xs:text-left text-center font-poppins font-semibold xs:text-[33.6px] text-[26px] xs:leading-[30px] leading-[22px] text-white flex-initial xs:w-64",
    headingCoursePrice: "xs:text-right text-center font-poppins font-semibold xs:text-[26.6px] text-[21px] xs:leading-[30px] leading-[22px] xs:mt-10 mt-5 text-white flex-initial xs:w-64",
    form: "text-white mt-6 xs:p-8 p-4 w-10/12 xs:w-10/12 self-center",
    headingmodal: "xs:text-left text-left font-poppins font-semibold xs:text-[18.6px] text-[14px] text-white flex-initial xs:mb-2 mb-3 flex justify-between",


  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
     
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionInfoMid: `flex-1 ${styles.flexCenter} flex-col `,

    sectionCourse: `xs:border-4 border hover:border-secondary rounded flex justify-center xs:flex-row flex-col ${styles.paddingY} mb-10`,
    bulletSection: `text-dimWhite font-poppins text-left ml-2 text-sm xs:text-base`,
  };
  
  export default styles;