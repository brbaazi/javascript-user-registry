class User
{
    static nextid = 1
    constructor(name , age , skills)
    {
        this.id = User.nextid
        User.nextid++
        this.name = name
        this.age = age
        this.skills = skills
    }
    getProfile()
    {
            return {
            id: this.id,
            name: this.name,
            age: this.age,
            skills: this.skills
        };
    }
    removeSkill(skill)
    {
        for(let i =0; i < this.skills.length ; i++)
        {
            if(this.skills[i] == skill )
            {
                const index  = this.skills.indexOf(skill)
                this.skills.splice(index , 1)
            }
        }
    }
    addSkills(...skill)
    {
        this.skills = [...this.skills , ...skill]
    }
}
User.prototype.introduce = function()
{
    console.log("Hello , my name is " + this.name );
};
User.prototype.isAdult = function()
{
    if (this.age >= 18)
        return true;
    return false;
};
const user1 = new User("brahim", 24 , ["c++" ,"c"])
const user2 = new User("ayoub", 24 , ["c" ,"c++"])
const user3 = new User("anss", 7 , ["c" ,"c++", "JAVA"])



class Userregistry
{
    constructor(users)
    {
        this.users = users
    }
    addUser(user)
    {
        this.users = [...this.users, user];
    }
    removeUser(id)
    {
        for(let i = 0; i < this.users.length; i++)
        {
            if(id == this.users[i].id)
            {
                let x = this.users.indexOf(this.users[i])
                this.users.splice(x , 1);
            }
        }
    }
    findUser(id)
    {
       for(let i = 0; i < this.users.length; i++)
        {
            if(id == this.users[i].id)
            {
                return this.users[i];
            }
        }
        return null       
    }
    search(options)
    {
        
        for(let i = 0; i < this.users.length; i++)
        {
            if(options == this.users[i].name)
            {
                return this.users[i];
            }
            if(options == this.users[i].age)
            {
                return this.users[i];
            }
            if(options == this.users[i].skills[this.users[i].skills.indexOf(options)])
            {
                return this.users[i];
            }
        } 
    }
    getStats()
    {
        console.log("totalUsers :", this.users.length);
        const ad = this.users.filter((user) => user.age >= 18)
        console.log("adults     :", ad.length);
        const mi = this.users.filter((user) => user.age < 18)
        console.log("minors     :", mi.length);
        const totalage = this.users.reduce((user , current) => user += current.age , 0)
        console.log("averageAge :", totalage / this.users.length);

    }

}
const clients  = new Userregistry([user1]);
clients.addUser(user2)
clients.addUser(user3)

clients.getStats()