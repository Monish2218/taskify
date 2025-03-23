import { taskService } from '@/services/taskService';
import {atomWithQuery} from 'jotai-tanstack-query';

export const tasksAtom = atomWithQuery(()=>({
    queryKey: ['tasks'],
    queryFn: taskService.getTasks,
    staleTime: Infinity,
}))

