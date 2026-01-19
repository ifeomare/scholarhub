package dev.ifeomare.scholarships;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ScholarshipRepository extends MongoRepository<Scholarship, ObjectId> {
    Optional<Scholarship> findScholarshipById(int id);
//    Optional<Scholarship> findScholarshipByName(String name);
}
