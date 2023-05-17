import { useRouter } from 'next/router'


// {id: 'max', clientprojectid: 'project1'}
// clientprojectid
// : 
// "project1"
// id
// : 
// "max"
// [[Prototype]]

const selectedClientsProjectPage = () => {
    const router = useRouter();
    console.log(router.query.id);
    const clientName = router.query.id;
    const projectName = router.query.clientprojectid;
    return (
        <div>
            <h3>
                This page shows the specific project of a given client
            </h3>
            <h3>
                Welcome  {clientName} this is project: {projectName}
            </h3>
        </div>
    )
}


export default selectedClientsProjectPage;