'use client'
import {Input} from "@/ui/input";
import {Button} from "@/ui/button";
import {PlusCircle} from "lucide-react";
import {useTaskStore} from "@/components/taskList/tasks";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/ui/form";

const registrationFormSchema = z.object({
  task: z
    .string()
    .min(1,{message:'The task field cannot be empty'})
});

export type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

export default function CreateNewTask() {
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
  });
  
  const addNewTask = useTaskStore(State => State.addNewTask)
  
  function createTask() {
    console.log('fdsfdsfds')
  }
  
  return <div className='mb-6 max-w-[400px] w-full'>
    <Form {...form}>
      <form className="flex gap-2 w-full justify-between mb-4" onSubmit={form.handleSubmit(createTask)}>
        <FormField
          control={form.control}
          name="task"
          render={({field}) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input placeholder='Enter new task' {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type='submit' className='flex gap-1'>
          Task <PlusCircle/>
        </Button>
      </form>
    </Form>
    <hr className='border-[0,5px] opacity-20 border-border w-full'/>
  </div>
}