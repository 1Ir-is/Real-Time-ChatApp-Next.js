import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";


const useOtherUser = (conversation: FullConversationType | {
    users: User[]
}) => {
    const session = useSession();
}