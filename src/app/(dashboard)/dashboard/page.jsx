import {getAllWorkspaces} from "@/services/workspace.service";

const dashboardPage = async () => {

    const workspaceData = await getAllWorkspaces();

    return (
        <main>
            {workspaceData?.data?.map((workspace) => (
                <div key={workspace.workSpaceId}>
                    <h1>{workspace.workspaceName}</h1>
                </div>
            ))}
        </main>
    );
}

export default dashboardPage;