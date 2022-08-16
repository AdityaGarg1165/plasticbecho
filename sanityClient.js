import sanityClient from "@sanity/client"

export default sanityClient({
    projectId:"hdao85uy",
    dataset:"production",
    useCdn:false,
    apiVersion: "2022-08-16"
})