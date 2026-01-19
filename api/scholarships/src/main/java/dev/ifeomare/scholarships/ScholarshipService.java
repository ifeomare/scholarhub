package dev.ifeomare.scholarships;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScholarshipService {
    @Autowired
    private ScholarshipRepository scholarshipRepository;

    public List<Scholarship> allScholarships() {
        return scholarshipRepository.findAll();
    }

    public Optional<Scholarship> singleScholarship(int id) {
        return scholarshipRepository.findScholarshipById(id);
    }
//    public Optional<Scholarship> singleScholarship(String name) {
//        return scholarshipRepository.findScholarshipByName(name);
//    }
}
