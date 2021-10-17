import supabase from  "~/helpers/supabase/client"
async function login(email, password){
    const {user, session, error} = await supabase.auth.signIn({email, password})
    if(error){
        throw error
    }
    return {user, session}
}
async function logout() {
    const { error } = await supabase.auth.signOut()
    if(error) {
        throw error
    }
}

async function signup(email, password){
    const {user, session, error} = await supabase.auth.signUp({email, password})
    if(error){
        throw error
    }
    return {user, session}
}

function getSession() {
    return supabase.auth?.session() ? supabase.auth?.session() : null
}

export default {
    login,
    logout,
    signup,
    getSession
}
