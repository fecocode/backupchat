import supabase from  "~/helpers/supabase/client"
async function login(email, password){
    const {user, session, error} = await supabase.auth.signIn({email, password})
    if(error){
        throw error
    }
    return {user, session}
}
async function signup(email, password){
    const {user, session, error} = await supabase.auth.signUp({email, password})
    if(error){
        throw error
    }
    return {user, session}
}

export default {
    login,
    signup,
}
