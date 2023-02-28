


class Course():
    
    def __init__(self, name="Undefined", credits=-1, code="1TE000", advanced=False, unlocks=set(), needs=set()):
        self.name = name
        self.credits = credits
        self.code = code
        self.advanced = advanced
        self.unlocks = unlocks
        self.needs = needs
        
    def __str__(self):
        return f"{self.name} | {self.code}"
    
    def __repr__(self):
        return f"{self.code}"
    
    def add_unlocks(self, new_unlocks = set()):
        self.unlocks.update(new_unlocks)
        for course in new_unlocks:
            if self not in course.needs:
                course.needs.add(self)

    def add_needs(self, new_needs = set()):
        self.needs.update(new_needs)
        for course in new_needs:
            if self not in course.unlocks:
                course.unlocks.add(self)

if __name__ == "__main__":
    
    test1 = Course(code="1TE001")
    test2 = Course(code="1TE002")
    test3 = Course(code="1TE003")
    test4 = Course(code="1TE004")
    
    test2.add_needs([test1, test3])
    # test3.add_unlocks
    
    print(test3.unlocks)
    
    print(test2.needs)